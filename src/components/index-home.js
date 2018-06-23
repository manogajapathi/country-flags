import React from 'react';
import { Form, Input, Card } from 'antd';
import './index-home.css';
import error404 from './404.png';
import logo from './logo.gif';
const FormItem = Form.Item;
const Search = Input.Search;

class IndexHome extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      country:"",
      flag:""
    }
  }

  getFlag = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
      let code = value.country;
        if(code!=="") {
          this.setState({
            flag:"http://www.countryflags.io/"+code+"/shiny/64.png"
          },()=>{
            console.log("Flag link : ",this.state.flag)
          })
        }
      } else {
        this.clearFlag()
      }
    })
  }

  clearFlag = () => {
    this.setState({
      flag:""
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Form className="form-main">
        <FormItem className="form-label" label="Search the flag with Country code">
        <img className="form-img-flag" alt="flag" src={logo}/>
        </FormItem>
        <FormItem>
          {getFieldDecorator('country', {
            rules: [{
              type: "string", pattern:"[a-zA-Z]", message: "Wrong country code"},{
              required: true, message: 'Please type the country code' }],
            })(
              <Search className="form-item"
              placeholder="Type the country code here (Eg. IN for INDIA)"
              enterButton="Search flag"
              size="large"
              onSearch={this.getFlag}
              maxLength="2"
            />
          )}
        </FormItem>
          {this.state.flag !== "" && 
          <Card 
          hoverable
          cover={<img className="form-img" alt="flag" src={this.state.flag} onError={(e)=>{e.target.src=error404}}/>}
          >
        </Card>}
       </Form>
      </div>
    )
  }
}

const IndexPage = Form.create()(IndexHome);
export default IndexPage;
