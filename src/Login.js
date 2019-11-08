import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {fakeAuth} from './utils/fakeAuth';

export default class Login extends Component{
    render(){
        return (
            fakeAuth.authenticate()?<Redirect to="/"/>:'login page'
        )
    }
}
