import React from 'react'
import styles from './SignUp.module.scss'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SignUp = (props) => {

    const {signed} = props
    const router = useRouter()

    return (
        <Link href={signed?'/logout?currentPage='+router.pathname.slice(1,router.pathname.length):'/signup?currentPage='+router.pathname.slice(1,router.pathname.length)} passHref={true}>
            <div id="signup" className={`${styles.signup_btn} ${signed?styles.signed:''}`} >
                <CgProfile />
            </div>
        </Link>
    )
}

export default SignUp
