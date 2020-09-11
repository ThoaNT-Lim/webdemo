import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import useSelection from 'antd/lib/table/hooks/useSelection';

const ListSearch =  () =>{
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>None</th>
          </tr>
        </thead>
      </table>
    );
  }

export default ListSearch;