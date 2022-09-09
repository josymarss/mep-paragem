import * as SMS from 'expo-sms';

async function SendMessage(number){
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(`+244${number}`,'Fica atento agora é sua paragem',
            {
                attachments: {
                    uri: '',
                    mimeType: '',
                    filename: '',
                },
            }
        );
        console.log(result);
        alert('Mensagem enviada com sucesso!');
    }else {
        // misfortune... there's no SMS available on this device
        alert('Mensagem não enviada');
    }
}

export default SendMessage;