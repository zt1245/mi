// footer公共样式
import React, { Fragment } from 'react'
import ghs from '../../images/ghs.png'
import './footer.scss'


const Footer = (props) => {
    return (
        <Fragment>
            <ul className='lang-select-list'>
                <li className='lang-select-li'><i>简体</i>|</li>
                <li className='lang-select-li'><i>繁体</i>|</li>
                <li className='lang-select-li'><i>English</i>|</li>
                <li className='lang-select-li'><i>常见问题</i>|</li>
                <li className='lang-select-li'><a href="https://www.mi.com/about/privacy/" >隐私政策</a></li>
            </ul>
            <p className='nf-intro'>小米公司版权所有-京ICP备10046444-
            <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134' ><span><img src={ghs} alt="" /></span>京公网安备11010802020134号</a>
                    -京ICP证110507号
            </p>
        </Fragment>
    )
}
export default Footer;