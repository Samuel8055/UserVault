import React from "react";

const UserAddress = ({ userInfo }) => {
  return (
    <div className='col-7 profile-right-container'>
      <p className='profile-title mt-2'>Address: </p>
      <div className='address-section'>
        <table>
          <tbody>
            {userInfo.addressInfo.map((item, index) => {
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
    </div>
  );
};

export default UserAddress;
