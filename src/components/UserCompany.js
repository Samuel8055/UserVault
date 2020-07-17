import React from "react";

const UserCompany = ({ userInfo }) => {
  return (
    <div className='info-table'>
      <p className='profile-title mt-2'>Company</p>
      <table>
        <tbody>
          {userInfo.companyInfo.map((item, index) => {
            return (
              <tr className='align-items-top' key={index}>
                <td className='text-right profile-title'>
                  {item.title}
                  <span className='mx-2 profile-title'>:</span>
                </td>
                <td className='text-left'>{item.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserCompany;
