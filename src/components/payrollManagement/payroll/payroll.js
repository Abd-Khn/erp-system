import React, { useContext, useEffect, useState } from "react"
import MonthDropdown from "../monthDropdown/monthDropdown"
import EmployeeContext from "../../../context/employees/employeeContext"
import SalaryContext from "../../../context/salary/salaryContext"
import toast from "react-hot-toast"
import Lottie from "lottie-react"
import Paid from "../animations/paid.json"

const Payroll = () => {
  const { employees, getAllEmployees } = useContext(EmployeeContext)
  const { addSalary, Days, setDays, Month, action, getRecord, salaryRecord } = useContext(SalaryContext)
  var totalMSal = 0
  const [salaryRecords, setsalaryRecords] = useState("")
  useEffect(() => {
    if (action === "View Records" && Month !== "") {
      getRecord(Month)
    }
  }, [Month, action])

  useEffect(() => {
    if (salaryRecord) setsalaryRecords(salaryRecord.salariesRecord)
  }, [salaryRecord])

  useEffect(() => {
    if (salaryRecord) {
      if (salaryRecord.status === 400) {
        toast.error(
          `No records found for ${Month}`,
          document.documentElement.classList.contains("dark")
            ? {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              }
            : ""
        )
      }
    }
  }, [salaryRecord])

  const PaySalaries = async () => {
    try {
      const statusCode = await addSalary(Month, Days)

      if (statusCode === 400) {
        toast.error(
          `Salaries Already Paid for ${Month}`,
          document.documentElement.classList.contains("dark")
            ? {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              }
            : ""
        )
      } else if (statusCode === 202) {
        setDays("")
        toast.success(
          "Salaries Paid Successfully!",
          document.documentElement.classList.contains("dark")
            ? {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              }
            : ""
        )
      }
    } catch (error) {
      console.error("Error paying salaries:", error)

      toast.error(
        "Error paying salaries. Please try again.",
        document.documentElement.classList.contains("dark")
          ? {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            }
          : ""
      )
    }
  }

  useEffect(() => {
    getAllEmployees()
  }, [])

  return (
    <div className="dark:bg-gray-900 bg-slate-50 ">
      <div className="flex justify-center items-center   ">
        <div className=" z-40 shadow-md w-screen h-[6rem] mt-24  bg-slate-100 bg-opacity-5 backdrop-blur-md   dark:bg-gray-950 dark:bg-opacity-5 dark:backdrop-blur-md fixed ">
           <div className="flex justify-center items-center pt-2 pl-56">
            <MonthDropdown />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 ">
        <div class="w-[60rem] ml-[14rem] overflow-x-auto mt-10 ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:border-gray-700 dark:text-gray-400 border border-gray-300">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 ">
                  Employee Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Employee Id
                </th>
                {action === "Pay Salary" && (
                  <th scope="col" class="px-6 py-3">
                    Pay/day
                  </th>
                )}
                {action === "Pay Salary" && (
                  <th scope="col" class="px-6  py-3">
                    Monthly Pay
                  </th>
                )}
                {action === "View Records" && (
                  <th scope="col" class="px-6  py-3">
                    Paid
                  </th>
                )}
                {action === "View Records" && (
                  <th scope="col" class="px-6  py-3">
                    Month
                  </th>
                )}
                {action === "View Records" && (
                  <th scope="col" class="px-6  py-3">
                    Status
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {action === "Pay Salary" &&
                Days &&
                employees.map((employee) => {
                  {
                    totalMSal += employee.basePay * Days
                  }
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {employee.name}
                      </th>
                      <td class="px-6 py-4 text-xs">{employee._id}</td>
                      <td class="px-6 py-4 ">Rs {employee.basePay}</td>
                      <td class="px-6 py-4 font-semibold">Rs {employee.basePay * Days}</td>
                    </tr>
                  )
                })}

              {action === "View Records" &&
                salaryRecords &&
                salaryRecords.map((record) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {record.employeeName}
                    </th>
                    <td class="px-6 py-4 text-xs">{record.employeeId}</td>

                    <td class="px-6 py-4 font-semibold">Rs {record.monthlyPay}</td>
                    <td class="px-6 py-4 font-semibold">{Month}</td>
                    <td class="px-6 py-4 font-semibold">
                      Paid
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {action === "Pay Salary" && Days && (
        <div className="flex justify-center content-center">
          <button
            onClick={() => PaySalaries()}
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-green-400 hover:text-green-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-green-400 mt-6 ml-60"
          >
            Pay Salaries
          </button>
        </div>
      )}
    </div>
  )
}

export default Payroll
