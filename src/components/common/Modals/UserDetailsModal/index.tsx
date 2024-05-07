import React, { useState, useEffect } from "react";
import { GetToken, GetUserDetails } from "@/utils/helpers/services";
import { closeModal } from "@/utils/helpers/modalcontrols";
import { formatBirthdate } from "@/utils/helpers/date-formatter";

import Icon from "../../icon";

export default function UserDetailsModal({ userId } : {userId: string}) {
  const [userDetails, setUserDetails] = useState<any>(null);

  const fetchUserDetails = async () => {
    try {
      const token = GetToken();
      if (token) {
        const response = await GetUserDetails(userId);
        setUserDetails(response.data.data)
      } else {
        console.error('User not logged in');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      return error;
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  return (
    <>
    <dialog id={`${userDetails?.id}_modal`} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-fit flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg flex flex-row gap-2">
            <Icon iconName="user-5-fill" />
            User ID: TX00{userDetails?.id}
          </h3>
          <table className="table mt-6">
            <tbody>
              <tr>
                <td className="font-semibold">Full Name</td>
                <td>{userDetails?.first_name} {userDetails?.last_name}</td>
              </tr>
              <tr>
                <td className="font-semibold">Birthday</td>
                <td>{userDetails && formatBirthdate(userDetails.birthday)}</td>
              </tr>
              <tr>
                <td className="font-semibold">Email Address</td>
                <td>
                  <p>{userDetails?.email}</p>
                  <p className={`badge badge-ghost badge-sm ${userDetails?.confirmed_email === true ? 'text-primary' : 'text-error'}`}>
                    {userDetails?.confirmed_email === true
                      ? 'Confirmed Email'
                      : 'Pending Confirmation'}
                  </p>
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Username</td>
                <td>{userDetails?.username}</td>
              </tr>
              <tr>
                <td className="font-semibold">Status</td>
                <td>
                  {userDetails?.role === 'pending_trader' || userDetails?.role === null
                    ? 'Pending Account'
                    : userDetails?.role === 'trader'
                    ? 'Approved Account'
                    : ''}
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => {closeModal(`${userDetails?.id}_modal`)}}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
    </>
  );
};