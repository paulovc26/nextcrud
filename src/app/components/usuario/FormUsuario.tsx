import { Usuario } from "@/core/model/Usuario";
import InputTexto from "../shared/InputTexto";

export interface FormUsuarioProps {
    usuario: Partial<Usuario>
    onChange: (usuario: Partial<Usuario>) => void
    onSave: () => void
    onCancel: () => void
    excluir: () => void
}

export default function FormUsuario(props: FormUsuarioProps) {

    return (
        <div className="flex flex-col gap-5">
            <InputTexto
                label="Nome"
                type="text"
                value={props.usuario.nome}
                onChange={(e) => {
                    props.onChange?.({ ...props.usuario, nome: e.target.value })
                }} />
            <InputTexto label="Email" type="email" value={props.usuario.email} onChange={(e) => {
                props.onChange?.({ ...props.usuario, email: e.target.value })
            }} />
            <InputTexto label="Senha" type="password" value={props.usuario.senha} onChange={(e) => {
                props.onChange?.({ ...props.usuario, senha: e.target.value })
            }} />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="bg-blue-500 px-4 py-2 rounded-md text-white" onClick={() => props.onSave()}>Salvar</button>
                    <button className="bg-zinc-500 px-4 py-2 rounded-md text-white" onClick={() => props.onCancel()}>Cancelar</button>

                </div>
                <button className="bg-red-500 px-4 py-2 rounded-md text-white" onClick={props.excluir}>Excluir</button>
            </div>
        </div>
    );
};
