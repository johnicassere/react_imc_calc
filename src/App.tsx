import { useState } from "react";
import styles  from "./App.module.css";
import imcImage from "./assets/formula-IMC.png";
import leftarrow from "./assets/leftarrow.png";
import { tabelaImc, calcularImc, TipoTabela } from "./imc/imc";
import { Item } from "./components/item"

const App = () => {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [itemShow, setItemShow] = useState<TipoTabela | null>(null)

  const buttonCalcular = () =>{
     if(altura && peso){
      setItemShow(calcularImc(altura, peso))
     }else{
      alert("Preencha Todos os campos!!!")
     }
  }

  const buttonBack = () => {
    setItemShow(null)
    setAltura(0)
    setPeso(0)
  }

return (
   <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={imcImage} alt="IMC image" width={400}/>
      </div>
    </header>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC.</h1>
        <p>O Índice de Massa Corporal (IMC) é um parâmetro bastante utilizado para classificar o 
          indivíduo de acordo com seu peso e altura.
        </p>

        <input type="number" 
        placeholder="Digite a sua Altura. Ex: 1.8"
        value={altura > 0 ? altura: ''}
         onChange={e => setAltura(parseFloat(e.target.value))}
         disabled={itemShow ? true : false}
        />

        <input type="number" 
        placeholder="Digite o seu Peso. Ex: 80.0"
        value={peso > 0 ? peso: ''}
         onChange={e => setPeso(parseFloat(e.target.value))}
         disabled={itemShow ? true : false}
        />

        <button onClick={buttonCalcular} disabled={itemShow ? true : false}>Calcular</button>
      </div>
      <div className={styles.rightSide}>
        {!itemShow &&
        <div className={styles.grid}>
            {tabelaImc.map((item, key) =>(
              <Item key={key} item={item}/>
            ))}
        </div>
        }
        {itemShow && 
          <div className={styles.itemShow}>
            <div className={styles.buttonVoltar} onClick={buttonBack}>
              <img src={leftarrow} alt="voltar" />
            </div>
            <Item item={itemShow}/>
          </div>
        
        }
      </div>

    </div>
   </div>
)
}

export default App;