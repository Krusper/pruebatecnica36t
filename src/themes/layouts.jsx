import styled from "styled-components";

const LayoutContainer = styled.div`
    .txtAlterType {
        margin: 0;
        font-weight: 500;
        opacity: 0.7
    }
    .TituloH1 {
        margin: 0;
        font-weight: bold;
        color: #333333;
    }

    .AlterClienteBody {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 2vh auto;
    }
    .AlterTitulos {
        margin-bottom: 2vh;
    }

    .OptionsAlter {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .separador {
        background: #8a8a8a;
        padding: 2px;
        border-radius: 20px;
        opacity: 0.5;
    }
    .ClientesTools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 95%;
        margin: 2vh auto 1vh auto;
    }
    .ContenedorTabla {
        width: 95%;
        margin: auto;
    }
    .ContenedorAcciones {
        display: flex;
        justify-content: space-evenly;
    }
    .AlterClienteForm {
        background: #ecf0ee;
        padding: 15px;
        margin-top: 2vh;
        border-radius: 7px;
    }


`
const LayoutBtn = styled.div`
outline: none;

.accept {
    cursor: pointer;
    background: #3BAF29;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 100%;
    
}
.deny {
    cursor: pointer;
    background: #F40000;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 100%;

}
.custom{
    cursor: pointer;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 100%;
}
.iconoMini {
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    border: none;
}
.add{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    background: var(--AzulPKT1);
}
.img-descript {
    width: 75%;
    height: 30px;
}
.txt-descript {
    margin: auto;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    margin: 5px;
}
.img-add{
    width: 70%;
}

.btn-cont {
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const LayoutInpt = styled.div`
/* display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 100%; */


.InptBtn-Distr{
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1.8fr 0.2fr;
    grid-template-rows: 0.6fr 1.4fr;
    gap: 0px 0px; 
    grid-template-areas: 
        "Texto ."
        "Input Boton"; 
}



.OnlyInpt-Distr{
    width: 100%
}

.Titul-core{
    margin: 0;
    grid-area: Texto;
}

.Inpt-core {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.Inpt-Btn {
    grid-area: Input;
    outline: none;
    border: 2px solid #666770;
    border-radius: 4px 0px 0px 4px;
    color: #333333;
    font-size: 16px;
    padding: 4px;
    width: 100%;
    /* outline: none; */
    box-sizing: border-box;
}


.Inpt {
    border: 2px solid #666770;
    border-radius: 4px;
    color: #333333;
    font-size: 16px;
    padding: 4px;
    width: 100%;
    /* outline: none; */
    box-sizing: border-box;
}

/* .InptSlct-Distr {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
} */

.Slct{
    border: 2px solid #666770;
    border-radius: 4px;
    color: #333333;
    font-size: 16px;
    padding: 4px;
    width: 100%;
}

input.date::-webkit-calendar-picker-indicator {
    opacity: 0.6;
}

.Btn-Show{
    grid-area: Boton;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 4px 4px 0px;

    border: 2px solid #666770;
    border-left: none;
}


.Btn-Hide{
    display: none;
}


`


export { LayoutBtn, LayoutInpt, LayoutContainer};