import styled from "styled-components";


export const Head = styled.header`
 background: linear-gradient(90deg, #C4A689 10% , #684138 60%, #402E32 100%);
 display: flex;
 justify-content: space-between;
 align-items: center;
  color:	#402E32;
 padding: 10px 20px 10px 20px ;
 flex-wrap: wrap;

 img{
  width: 160px;
  height: auto;

}

`


export const CompHead = styled.div`

align-items: center;
padding: 10px 20px 0 20px ;
display: flex;
font-size: 20px;
color: darkgray;

img{
  width: 30px;
}
`
export const Button = styled.button`
border-radius:7px ;

&:hover{
    color:#FF8500;
}
&:active{
    background-color: #684138;
}


`