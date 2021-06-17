import React,{Component} from 'react'

class Hello extends Component{
  static defaultProps={
    name:'이름없음'
  };
  render(){
    const {color,isSpecial,name}=this.props
    return (
      <div style={{color}}>
        {this.props.isSpecial && <b>*</b>}
        안녕하세요{this.props.name}
      </div>
    )
  }
}

// function Hello({color,name,isSpecial}){
//     return ( 
//         // <div style={{color:props.color}}>{props.isSpecial ? <b>*</b> : null} Hello {props.name}</div>
//         <div style={{color}}>
//         {isSpecial && <b>*</b>}
//         안녕하세요 {name}
//         </div>
//     )
// }
Hello.defaultProps = {
  name : "None"
}
export default Hello