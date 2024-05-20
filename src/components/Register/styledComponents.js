import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height:100vh;
`
export const RegisterImg = styled.img`
  height: 400px;
  width: 400px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const RegisterHeading = styled.h1`
  font-family:'Roboto';
  font-size: 30px;
  color: #334155;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Label = styled.label`
  font-family:'Roboto';
  font-size: 15px;
  color: #7b8794;
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  font-family:'Roboto';
  padding: 15px;
  color: #334155;
  border: 1px solid #cbd5e1
  width: 350px;
  outline: none;
  margin-bottom: 10px;
`
export const Select = styled.select`
  font-family:'Roboto';
  padding: 15px;
  color: #334155;
  border: 1px solid #cbd5e1
  width: 350px;
  outline: none;
  margin-bottom: 10px;
`
export const RegisterButton = styled.button`
  font-family:'Roboto';
  font-size: 10px;
  color: white;
  background-color: #3b82f6;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left:20px;
  padding-right: 20px;
  border-radius: 5px;
  outline: none;
`
export const ErrorMsg = styled.p`
  font-family:'Roboto';
  font-size: 15px;
  color: #ff0b37;
`
