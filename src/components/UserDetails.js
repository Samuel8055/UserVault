import React from "react";

const UserDetails = ({ userInfo }) => {
  return (
    <table>
      <tbody>
        {userInfo.generalInfo.map((item, index) => {
          return (
            <tr key={index}>
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
  );
};

export default UserDetails;
