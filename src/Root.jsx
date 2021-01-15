import React, { Component, Fragment } from "react";

import List from './components/list'
import Basket from './components/basket'
import Nav from './components/nav'
import Card from './components/card'

import data from './data/products'
class Root extends Component {
  state = {
    products : data.products,
    listDisplay: [],
    startIndex: 0,
    current: 2,
    basket:{
      products:[],
      nbrOfArticles: 0,
      total: 0,
    },
    filter: "",
    checked: false
  }

  componentDidMount(){
    this.setState({ listDisplay: [...this.state.products]})
  }

  componentDidUpdate(a, prevState){
    //Filter items in stock
    if(prevState.checked !== this.state.checked || prevState.filter !== this.state.filter){
      const list = prevState.products
        .filter(item => {
          if(this.state.checked){
            return item.productStock
          } else{
            return item
          }
        })
        .filter(item => item.productCategory.includes(this.state.filter))
        
      this.setState({ listDisplay: list})
    }
  }

  handleChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value })
  }

  handleNext = () => {
      if(this.state.startIndex === 0 && this.state.current < 2){
        this.setState({ current: this.state.current + 1} ) 
        return;
      }
      if(this.state.startIndex < this.state.listDisplay.length - 5){
        this.setState({ startIndex: this.state.startIndex + 1 }) 
        return;
      }
      if(this.state.startIndex === this.state.listDisplay.length - 5 && this.state.current === 4){
        this.setState({ current: 0, startIndex: 0 }) 
        return;
      }
      if(this.state.startIndex === this.state.listDisplay.length - 5){
        this.setState({ current: this.state.current + 1 } ) 
        return;
      }
  }

  handlePrevious = () => {
    if(this.state.startIndex === 0  && this.state.current === 0 ) {
      this.setState({ current: 4, startIndex: this.state.listDisplay.length - 5 })
      return
    }
    if(this.state.startIndex === this.state.listDisplay.length - 5  && this.state.current > 2 ) {
      this.setState({ current: this.state.current -1 })
      return
    }
    if(this.state.startIndex === 0 ){
      this.setState((prevState) =>{
        return {
          ...prevState,
          current: prevState.current -1 ,
        }
      })
    }else{
      this.setState({startIndex : this.state.startIndex - 1})
    }  
  }

  handleAddProduct = (item) => {
    const product = item
    let basket = {...this.state.basket}

    if(basket.products.find(p => p.productId === product.productId)){
      basket.total += item.productPrice
    }else{
      const newLine = {
        productId : product.productId,
        productName : product.productName,
        productPrice : product.productPrice,
        qty: 1
      }
      basket.products.push(newLine)
      basket.nbrOfArticles += 1
      basket.total += newLine.productPrice
    }
    
    this.setState({basket: {
      ...basket,
    }})
  }
  
  render() {
    let componentsToRender = <h3>No results</h3> 
    if (this.state.listDisplay.length > 0){
      componentsToRender = (
        <Fragment>
        
        <List 
          products={this.state.listDisplay}
          startIndex={this.state.startIndex}
          current={this.state.current}
          stock={this.state.checked}
        />

        <button href="#" onClick={() =>this.handlePrevious()} className="btn btn-secondary mx-1">
          Previous
        </button>
        <button href="#" onClick={() =>this.handleNext()} className="btn btn-secondary mx-1">
          Next
        </button> 
        <Card 
          product={this.state.listDisplay[this.state.current < 2 ? this.state.current :  this.state.startIndex + 2]}
          addProduct = {this.handleAddProduct}
        />
      </Fragment>
      )
    }
    return (
      <Fragment>
        <Nav
          filterValue = {this.state.filter} 
          check = {this.state.checked}
          change = {this.handleChange}/>
        <Basket 
          basket = {this.state.basket}
        />
        {componentsToRender}
      </Fragment>
    )
  }
}

export default Root;
