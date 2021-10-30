import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth/auth";

//tipagem:
interface UserData {
  email: string;
  password: string;
}

function Login() {
  const { signIn } = useAuth();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Ops, esqueceu do email")
      .email("Ops, formato de email inválido"),
    password: yup
      .string()
      .required("Ops, esqueceu da senha")
      .min(6, "Ops, senha menor que o permitido(6)"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: UserData) => {
    signIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("email")} />
      {errors.email?.message}
      <input placeholder="Password" type="password" {...register("password")} />
      {errors.password?.message}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
