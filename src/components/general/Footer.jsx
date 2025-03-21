import React from 'react'

const Footer = () => {
    const date = new Date();
    const footerStyle = {
        "footer":{
            
            "backgroundColor":"#fee",
            "paddingInline":"10%",
            "paddingBlock":"2vw",
            "height":"250px",

        },
        "copyrights":{
            "textAlign":"center",
        }
    }

  return (
    <div>
        <footer className='footer' style={footerStyle.footer}>
            <h2>SA FOODS</h2>
            <p className='copyrights' style = {footerStyle.copyrights}>Copyrights &copy;{date.getFullYear()}</p>
        </footer>
    </div>
  )
}

export default Footer