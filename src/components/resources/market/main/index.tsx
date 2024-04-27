import axios from "axios";
import { useState } from "react";
import { API_URL } from "@utils/helpers/services";



export default function Table () {




  return (
    <div className="overflow-x-auto">
      <table className="table">
      {/* head */}
      <thead>
          <tr>
          <th>Stocks</th>
          <th>Change 1D</th>
          <th>Current Price</th>
          <th>Buy</th>
          </tr>
      </thead>
      <tbody>
          <tr>
          <td>
              <div className="flex items-center gap-3">
              <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                  <img src="https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png" alt="AAPL" />
                  </div>
              </div>
              <div>
                  <div className="font-bold">AAPL</div>
                  <div className="text-sm opacity-50">Apple Inc.</div>
              </div>
              </div>
          </td>
          <td className="text-error">
              $ -0.59
              <br/>
              <span className="badge badge-ghost badge-sm text-error">0.35%</span>
          </td>
          <td>$ 169.30</td>
          <th>
              <button className="btn btn-primary shadow-md">Buy</button>
          </th>
          </tr>
      </tbody>

      {/* foot */}
      <tfoot>
          <tr>
          <th>Stocks</th>
          <th>Change 1D</th>
          <th>Current Price</th>
          <th>Buy</th>
          </tr>
      </tfoot>
      
    </table>
  </div>
    )
  }