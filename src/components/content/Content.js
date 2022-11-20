import './Content.css'
import React from 'react'
import RowData from '../../components/urls/Url'
import Row from '../../components/row/Row'
function Content(){
    return(
<div className='content'>
    {RowData.map((ele)=>{
       return <Row title={ele.title} url={ele.url}/>
    })}
</div>
    );
}
export default Content;