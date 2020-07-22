import styled from 'styled-components'

export const DivLoginDad = styled.div`
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 list-style: none;
 color: black;
`

export const HeaderHomePage = styled.header`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #c4c2c2;
  position: absolute;
  width: 100vw;
  transition: top 0.3s;
  top: 0;
`


export const H1 = styled.h1`
  margin: 20px;
`
export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: initial;
`

export const Nav = styled.nav`
  display: flex;
  margin: 10px;
`

export const Ul = styled.ul`
display: flex;
margin: 0;
padding: 0;
`

export const Li = styled.li`
  list-style: none;
  margin-top: 25px;
  padding: 16px;
  font-size: 16px;
  background: #1A1A1A;
  border-radius: 8px;
  color: #FFF;
  height: 24px;
  width: 60px;
  text-align: center;
  :hover{
    text-align: center;
   background: #9933FF;
    cursor: pointer;
  }
`

export const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12%;
`
export const DivLogoLogin = styled.div`
  margin-right: 150px;
`
export const InputForm = styled.input`
  width: 500px;
  height: 35px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #999999;
  outline: none;
  margin: 4px;
`

export const DivFormLogin = styled.div`
  display: flex;
  flex-direction: column;
`
export const DivButtonLogin = styled.div`
  margin-top: 60px;
  display: flex;
`

export const ButtonLogin = styled.button`
  outline: none;
  width: 200px;
  height: 50px;
  background: #9933FF;
  margin-right: 16px;
  color: #FFF;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ButtonLoginBackHome = styled.button`
  outline: none;
  width: 200px;
  height: 50px;
  background: #1A1A1A;
  margin: 50px 50px;
  color: #FFF;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  :hover{
    background: #9933FF;
  }
`

export const ButtonAply = styled.button`
  outline: none;
  width: 100px;
  height: 50px;
  background: #1A1A1A;
  color: #FFF;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: auto;
  :hover {
    background: #9933FF;
  }

`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
`

export const LabelFormLogin = styled.label`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const RocketImg = styled.img`
  width: 250px;
  height: 250px;
`
export const RocketImgHome = styled.img`
  width: 50px;
  height: 50px;
`

export const MainHome = styled.main`
  width: 600px;
  height: 100vh;
  padding-top: 200px;
  margin: 0 auto;
  text-align: center;
`

export const CardsTrips = styled.div`
  border: 2px solid #999999;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 16px;
`