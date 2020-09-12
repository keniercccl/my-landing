import React from 'react';
import {
  Typography,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles ({
  root : {
    backgroundColor : '#eceff1',
    maxWidth: 345,
  },
  leftcontent : {
    alignItems : 'right' 
  }
})

function Working(props) {

  const classes = useStyles();

  return (
    <div>
      <Card className = {classes.root}>
          <Card>
            <Typography variant='h4'> Nestlè Venezuela</Typography>
            <Typography variant='body1'>
              Analista Control Confites
            </Typography>
            <Typography>
              • Soporte técnico nivel 1 al área de ventas
              • Verificación de documentos fiscales (facturas y notas crédito)
              • Digitación de pedidos (SAP)
              • Verificación de mercancía en mal estado
              • Realización y control de auditorias de inventario
              • Garantizar cuadre mensual de inventario físico y virtual
              • Recepción y despacho de mercancía bajo método FIFO logrando la disminución de productos mermados.
            </Typography>
          </Card>


      </Card>
    </div>
  );
}

export default Working;