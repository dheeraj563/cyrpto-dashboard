import React from "react";
import get from 'lodash/get';
import { useNavigate } from "react-router-dom";

import "./row.m.css";

import { Text } from "../../atom";

function Row({ data, bookmark, handleBookmark }) {
  let navigate = useNavigate();

  return (
    <tbody className="rowWrapper">
      <tr>
        <td>
          <div>
            {bookmark.includes(data.coinId) ? <img onClick={() => handleBookmark(data.coinId)} src="https://img.icons8.com/ios-filled/344/hearts.png" alt=".." /> : <img onClick={() => handleBookmark(data.coinId)} src="https://img.icons8.com/material-outlined/344/hearts.png" alt=".." />}
          </div>
          <div className="coinid">
            <Text text={get(data, "coinId", "")} />
          </div>
          <div>
            <div onClick={() => navigate(`/${get(data, "coinAcronym", "")}`, { replace: true })} className="name">
              <img
                src={get(data, "coinIcon", "")}
                alt="icon..."
              />
              <Text bold text={get(data, "coinName", "")} />
            </div>
          </div>
        </td>
        <td />
        <td />
        <td>
          <Text text={get(data, "floatPlaces", "")} />
        </td>
        <td>
          <Text text={get(data, "minTradeAmt", "")} />
        </td>
        <td>
          <Text text={get(data, "minDeposit", 0)} />
        </td>
      </tr>
    </tbody>
  );
}

export default Row;
