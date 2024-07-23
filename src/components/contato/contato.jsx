function Contato() {
    return(
       
        <div>
            <h2>Entre em contato</h2>
            <br/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse sit amet mollis nisl.
            </p>
            <br/>
            <p><hr/></p>
            <form>
                <div>
                    <label>E-mail:</label><br/>
                    <input type="email" name="email" />
                </div>
                
                <div>
                    <label>Assunto:</label><br/>
                    <input type="text" name="assunto" />
                </div>

                <div>
                    <label>Descrição:</label><br/>
                    <textarea></textarea>
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
}

export default Contato;