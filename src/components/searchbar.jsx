import React from 'react'

export default function searchbar (props){
        return(
            <form className="form">
                <input 
                    type="text" 
                    className="form-control mr-sm-2" 
                    name="filter" value={props.val} 
                    placeholder="Search" 
                    onChange={(e) => props.changed(e)}
                />
                <br />
                <div className="form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        name="checked"
                        checked={props.checked}
                        onChange={(e) => props.changed(e)}/>
                    <label className="form-check-label">In Stock</label>
                </div>
            </form>
        )
}
