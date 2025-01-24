import React, {useState} from "react";
import {Icon} from "../../components/Icon";
import {S} from "./HeaderMenu_Styles"
const items = ["home", "works", "about-me", "contacts"]
export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)};
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
                <ul>
                    {items.map((items, index) => {
                        return <S.MenuItem key={index}>
                            <S.Link href="">
                                <span>#</span>
                                <S.Link href="/{items}">{items}</S.Link>
                            </S.Link>
                        </S.MenuItem>
                    })}
                    <S.SelectLang>
                        <option value={"en"} selected>EN</option>
                        <option value={"ru"}>RU</option>
                    </S.SelectLang>
                </ul>
                <S.MobileMedia>
                    <S.Link href="">
                        <Icon width={'42px'} height={"42px"} viewBox={"0 0 64 64"} iconId={'github'}/>
                    </S.Link>
                    <S.Link href="">
                        <Icon width={"42px"} height={"42px"} viewBox={"0 0 64 64"} iconId={'dribble'}/>
                    </S.Link>
                    <S.Link href="">
                        <Icon width={'42px'} height={"42px"} viewBox={"0 0 64 64"} iconId={'figma'}/>
                    </S.Link>
                </S.MobileMedia>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
