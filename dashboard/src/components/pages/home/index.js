import React, { useEffect, useState } from 'react';
import { getAllData } from '../../../services/currencyService';
import { CurrencyTable } from '../../organisms';

import "./home.m.css";

function Home() {

  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searching, setSarching] = useState(false);
  const [loader, setLoader] = useState(false);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    setBookmark(JSON.parse(localStorage.getItem('bookmark') || '[]'));
  }, []);

  useEffect(() => {
    if (bookmark.length) {
      localStorage.setItem('bookmark', JSON.stringify(bookmark));
    }
  }, [bookmark]);

  useEffect(() => {
    setLoader(true);
    getAllData()
      .then(users => {
        const data = users[0].data[0]
        let formattedData = [];
        for (const item in data) {
          formattedData.push({...data[item], coinAcronym: item});
        }
        setData(formattedData);
        setLoader(false);
      });
  }, []);

  const handleBookmark = (id) => {
    if (bookmark.includes(id)) {
      setBookmark(preState => preState.filter(item => item !== id));
    } else {
      setBookmark(preState => [...preState, id])
    }
  }

  const handleSearch = (e) => {
    const { value }= e.target;
    if (value) {
      if (!searching) {
        setSarching(true);
      }
      setSearchData(data.filter(item => (item.coinName.toLowerCase().includes(value.toLowerCase()) || item.coinId == value)));
    } else {
      if (searching) {
        setSarching(false);
      }
    }
  }

  return (
      <div className="homeWrapper">
        <CurrencyTable
          handleBookmark={handleBookmark}
          loader={loader}
          data={searching ? searchData : data}
          handleSearch={handleSearch}
          searching={searching}
          bookmark={bookmark}
        />
    </div>
  )
}


export default Home;