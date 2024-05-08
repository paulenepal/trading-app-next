import React from "react";
import { firstLetter } from "@/utils/helpers/name-formatter";
import { openModal } from "@/utils/helpers/modalcontrols";
import UserApprovalModal from "@/components/common/Modals/UserApprovalModal";

export default function PendingTraders ( { traders, loading } : { traders: any, loading: boolean }) {

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-pin-rows">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">User ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>User Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {traders.data && traders.data.length > 0 ? (
            traders.data.map((trader: any, index: number) => (
              <tr key={trader.id}>
                <th className="text-center">TX00{trader.id}</th>
                <td>
                <div className="flex items-center gap-4">
                  <div className="avatar online placeholder">
                    <div className="bg-accent text-neutral-content rounded-full w-16">
                      <span className="text-xl">{firstLetter(trader.first_name)}{firstLetter(trader.last_name)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{trader.first_name} {trader.last_name}</div>
                    <div className="text-sm opacity-50">@{trader.username}</div>
                  </div>
                </div>
                </td>
              
                <td>
                  {trader.email}
                  <br/>
                  <span className={`badge badge-ghost badge-sm ${trader.confirmed_email === true ? 'text-primary' : 'text-error'}`}>
                    {trader.confirmed_email === true
                      ? 'Confirmed Email'
                      : 'For Email Confirmation'}
                  </span>
                </td>
                <td className={trader?.role === 'pending_trader' || trader?.role === null ? 'text-error' : ''}>
                  {trader?.role === 'pending_trader' || trader?.role === null
                    ? 'Pending Account'
                    : trader?.role === 'trader'
                    ? 'Approved Account'
                    : ''}
                </td>
                <th>
                  <button 
                    className="btn btn-ghost btn-xs"
                    onClick={() => openModal(`${trader.id}_modal`)}
                  >
                    Approve
                  </button>
                </th>
                <UserApprovalModal userId={trader.id} />
              </tr>
            ))
          ) : traders == undefined && !loading? (
            <tr>
                <td colSpan={7} className="text-center">
                  No Pending Accounts for Approval.
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  {loading ? 'Loading Users...' : 'No Pending Accounts for Approval'}
                </td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
    </>
  )
}