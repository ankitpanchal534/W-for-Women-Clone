import React from 'react'
import { BsSearch } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { RiUser3Line } from "react-icons/ri";
import './Header.css'
export default function Header() {
    return (
        <div>
            <div className="header">
                <img
                    src="https://wforwoman.com/images/logo.png"
                    style={{ height: "75px" }}
                />

                <div className="item-list">
                    <ul className="item-list">
                        <li className="li-new-in" style={{color:"darkred"}}>
                            NEW IN
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
                                <li>PLUS SIZES</li>
                                <li>FOLKSONG</li>
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
                                <li>PLUS SIZES</li>
                                <li>FOLKSONG</li>
                            </div>
                        </li>
                        <li className="li-new-in">TOP WEAR
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
                              
                                <li>FOLKSONG</li>
                            </div>
                        </li>
                        <li className="li-new-in">BOTTOM WEAR
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
                                <li>PLUS SIZES</li>
                                <li>FOLKSONG</li>
                            </div>
                        </li>
                        <li className="li-new-in">COSMETICS
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                                
                            </div>
                        </li>
                        <li className="li-new-in">BOTTOM WEAR
                            <div className="hidden-box">
                         
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
                                <li>PLUS SIZES</li>
                                <li>FOLKSONG</li>
                            </div>
                        </li>
                        <li className="li-new-in">FOOTWEAR
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
                                <li>PLUS SIZES</li>
                                <li>FOLKSONG</li>
                            </div>
                        </li>
                        <li className="li-new-in">WINTER WEAR
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
            
                            </div>
                        </li>
                        <li className="li-new-in">DRAPES
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
                                <li>PLUS SIZES</li>
                                <li>FOLKSONG</li>
                            </div>
                        </li>
                        <li className="li-new-in">WISHFUL
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                                <li>GILETS</li>
                                <li>PLUS SIZES</li>
                                <li>FOLKSONG</li>
                            </div>
                        </li>
                        <li className="li-new-in">SALE
                            <div className="hidden-box">
                               <li>KURTA</li>
                                <li>TOP</li>
                                <li>SETS & DRESSES</li>
                         
                                <li>FOLKSONG</li>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="search-box">
                    <input placeholder="Search" id="input-box" />
                    <BsSearch style={{ width: "20px", height: "30px" }} />
                </div>

                <div className="cart-login">
                    <div>
                        <CgShoppingBag />
                        CART
                    </div>
                    <div>
                        <RiUser3Line />
                        LOGIN
                    </div>
                </div>
            </div>
        </div>
    );
}
