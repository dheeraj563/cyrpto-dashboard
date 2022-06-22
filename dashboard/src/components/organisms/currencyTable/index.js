import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { get } from "lodash";
import { Text } from "../../atom";
import { Row } from "../../molecules";

import "./currencyTable.m.css";

const CurrencyTable = ({
  data,
  loader,
  handleBookmark,
  handleSearch,
  searching,
  bookmark
}) => {
  const [sortBy, setSortBy] = useState("coinId");

  const sortedData = useMemo(() => {
    return data.sort((a, b) => {
      if (get(a, sortBy, "") > get(b, sortBy, "")) {
        return 1;
      }
      return -1;
    });
  }, [data, sortBy]);

  return (
    <>
      <div className="searchCoin">
        <input placeholder="Search here ..." onChange={handleSearch} />
      </div>
      <tbody className="rowWrapper">
        <tr>
          <th>
            <div>
              <div className="dummyTag" />
              <div className="heading">
                <Text handleClick={() => setSortBy("coinId")} text={"#"} />
                {sortBy === "coinId" && <FontAwesomeIcon icon={faArrowUp} />}
              </div>
            </div>
            <div className="name">
              <div className="heading">
                <Text
                  handleClick={() => setSortBy("coinName")}
                  bold
                  text={"Coin"}
                />
                {sortBy === "coinName" && <FontAwesomeIcon icon={faArrowUp} />}
              </div>
            </div>
          </th>
          <th />
          <th />
          <th>
            <div className="heading">
              <Text
                handleClick={() => setSortBy("floatPlaces")}
                text={"floatPlaces"}
              />
              {sortBy === "floatPlaces" && <FontAwesomeIcon icon={faArrowUp} />}
            </div>
          </th>
          <th>
            <div className="heading">
              <Text
                handleClick={() => setSortBy("minTradeAmt")}
                text={"MinTradeAmt"}
              />
              {sortBy === "minTradeAmt" && <FontAwesomeIcon icon={faArrowUp} />}
            </div>
          </th>
          <th>
            <div className="heading">
              <Text
                handleClick={() => setSortBy("minDeposit")}
                text={"MinDeposit"}
              />
              {sortBy === "minDeposit" && <FontAwesomeIcon icon={faArrowUp} />}
            </div>
          </th>
        </tr>
      </tbody>
      {searching && !data.length ? (
        <div className="indicator">No Coin found</div>
      ) : loader ? (
        <div className="loader">Loading .... </div>
      ) : (
        sortedData.map((item) => (
          <Row bookmark={bookmark} data={item} handleBookmark={handleBookmark} />
        ))
      )}
    </>
  );
};

export default CurrencyTable;
