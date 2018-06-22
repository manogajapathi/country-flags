import React from 'react';
import { Form, Input, Card } from 'antd';
import './index-home.css';
import error404 from './404.png'
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
   // e.preventDefault();
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
      }
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Form className="form-main">
        <FormItem>
          {getFieldDecorator('country', {
            rules: [{
              type: "string", pattern:"[a-zA-Z]", message: "Wrong country code"},{
              required: true, message: 'Please type the country code' }],
            })(
              <Search className="form-item"
              placeholder="Type the country code (Eg. IN for INDIA)"
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
