// import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Cdata from "./Cdata.json"
import axios from 'axios'

import React, { Component } from 'react'

export default class Location extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loaded : false
    }
  }
  componentDidMount() {
    axios.get('https://hrapplicationapi.azurewebsites.net/v1/Language')
    .then(response=>{
      this.setState({ data: response.data, loaded:true })
    })
    .catch(error=>{
      // handle error
      console.log(error);
    })
  }

  render() {
    return (
      <>
        <div>
          {
            <div style={{ height: 500, width: '100%' }}>
              {this.state.loaded &&
              <DataGrid
                rows={this.state.data}
                columns={Cdata}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableSelectionOnClick
              />}
            </div>
          }
        </div>
      </>
    )
  }
}
