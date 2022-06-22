import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { getDetails } from "../../../services/currencyService";

import "./coinDetails.m.css";

function CoinDetails() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({});
  const [coin, setCoin] = useState({});
  const params = useParams();
  const id = get(params, "id", "");

  useEffect(() => {
    setLoader(true);
    getDetails().then((detail) => {
      setData(detail);
      setLoader(false);
    });
  }, []);

  useEffect(() => {
    setCoin(data[id.toUpperCase()]);
  }, [data, id]);

  return (
    <div className="detailsWrapper">
      <div className="detailsInnerWrapper">
      <FontAwesomeIcon onClick={() => navigate(`/`, { replace: true }) } icon={faArrowLeft} />
      <div className="detailsrow">
        <div>highest_buy_bid: </div>
        {loader ? <div>loading ... </div> : <div>{get(coin, "highest_buy_bid", "")}</div>}
      </div>
      <div className="detailsrow">
        <div>lowest_sell_bid: </div>
        {loader ? <div>loading ... </div> : <div>{get(coin, "lowest_sell_bid", "")}</div>}
      </div>
      <div className="detailsrow">
        <div>last_traded_price: </div>
        {loader ? <div>loading ... </div> : <div>{get(coin, "last_traded_price", "")}</div>}
      </div>
      <div className="detailsrow">
        <div>yes_price: </div>
        {loader ? <div>loading ... </div> : <div>{get(coin, "yes_price", "")}</div>}
      </div>
      <div>
        <div className="detailsVolume">Volume </div>
        {/* {loader ? <div>loading ... </div> : <div>{get(coin, "volume", "")}</div>} */}
        <div className="detailsrow">
        <div>max: </div>
        {loader ? <div>loading ... </div> : <div>{get(coin, ["volume", "max"], "")}</div>}
      </div>
      <div className="detailsrow">
        <div>min: </div>
        {loader ? <div>loading ... </div> : <div>{get(coin, ["volume", "min"], "")}</div>}
      </div>
      <div className="detailsrow">
        <div>volume: </div>
        {loader ? <div>loading ... </div> : <div>{get(coin, ["volume", "volume"], "")}</div>}
      </div>
      </div>
      </div>
    </div>
  );
}

export default CoinDetails;
