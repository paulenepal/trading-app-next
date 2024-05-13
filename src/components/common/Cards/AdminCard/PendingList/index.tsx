import React from "react";
import { firstLetter } from "@/utils/helpers/name-formatter";
import { openModal } from "@/utils/helpers/modalcontrols";
import UserApprovalModal from "@/components/common/Modals/UserApprovalModal";

export default function NewTraders ( { traders, loading } : { traders: any, loading: boolean }) {

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-8">
      <div className="mb-4">
        <h1 className="font-bold text-lg">New Accounts For Approval</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-pin-rows bg-white">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>User Status</th>
            </tr>
          </thead>
          <tbody>
          {traders.data && traders.data.length > 0 ? (
            traders.data.map((trader: any, index: number) => (
              <tr key={trader.id}>
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
    </div>
  )
}