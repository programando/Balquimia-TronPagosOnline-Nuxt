 
  module.exports = {
    
    methods: {
        
        PayuLatamSendForm(form, keyField, md5Key) {
            let valorPIN = parseInt(form.valor_pagar.replace(/\./g, '') ) ;
            
            document.getElementById('amount').value        = valorPIN;
            document.getElementById('buyerEmail').value    = form.email.trim();
            document.getElementById('description').value   =  keyField;
            document.getElementById('payerDocument').value = form.nro_identif.trim();
            document.getElementById('payerFullName').value = form.nom_full.trim();
            document.getElementById('referenceCode').value = form.nro_identif.trim();
            document.getElementById('signature').value = md5Key;
            document.psePayForm.submit();     
        },
      

    }, 


  }  
