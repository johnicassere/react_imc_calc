import { TipoTabela } from "../../imc/imc";
import styles  from "./item.module.css";
import upImg from "../../assets/up.png";
import downImg from "../../assets/down.png";

type Props = {

    item: TipoTabela
}



export const Item = ({ item }: Props) => {
    
    return (
        <div className={styles.main} style={{backgroundColor: item.cor}}>
            <div className={styles.sectionIcon}>
                <div className={styles.icon}>
                    <img src={item.icon === 'up' ? upImg : downImg} alt="img" />
                </div>
            </div>
            <div className={styles.title}>{item.titulo}</div>
         
            <div className={styles.info}>
                <>
                IMC etsá entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
            {
                item.seuImc &&
                <div className={styles.imcShow}>Seu IMC é de {item.seuImc} Kg/m²</div>
            }
        </div>
    )
}