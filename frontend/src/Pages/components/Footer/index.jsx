import { Link } from "react-router-dom";
import { GridContainer } from "../GridContainer";
import { WrapperContainer2 } from "../WrapperContainers";
import { Title } from "../Title";
import { AnchorCard, TextCard } from "../TextComponents";

import { MdOpenInNew } from "react-icons/md";

import "./styles.css";

const Footer = () => {
    return(
        <footer className="footer">
            <WrapperContainer2 flexDirection="column" gap={75}>


                <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                    <Link to={"/home"}>
                        <Title className="animacion2" white={true}>SCEEV</Title>
                        <TextCard width="auto" className="animacion2" white={true} textAlign="center">&quot;Transforma datos en talento, oportunidades en éxito&quot;</TextCard>
                    </Link>
                </WrapperContainer2>

                <GridContainer className="grid-1-1-1">
                    <Link to={"/home"}>
                        <WrapperContainer2 justifyContent="center" alignItems="center" padding={0}>
                            <TextCard width="auto" className="animacion2" white={true} textAlign="center"></TextCard>
                        </WrapperContainer2>
                    </Link>
                </GridContainer>

                <WrapperContainer2 justifyContent="center" alignItems="center" padding={"40px 0px 0px 0px"} className="border-top">
                    <AnchorCard uri="https://github.com/5arSanti/sceev-project" width="auto" className="privacy-policy animacion2" fontSize={13} white={true} textAlign="center">
                        Repositorio de GitHub <MdOpenInNew/>
                    </AnchorCard>
                </WrapperContainer2>
            </WrapperContainer2>

        </footer>
    )
}

const SecondFooter = () => {
    const date = new Date();
    
    return (
        <div className="footer-copy-container">
            <p>Copyright &copy; {date.getFullYear()} Santiago Arias</p>
        </div>
    );
}

export { Footer, SecondFooter };