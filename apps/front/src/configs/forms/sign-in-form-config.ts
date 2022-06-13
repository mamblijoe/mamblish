import { ISignInFormConfig } from "@/types/forms-config";

const SignInFormConfig: ISignInFormConfig[] = [
  {
    required: true,
    fullWidth: true,
    name: "email",
    label: "Email",
    type: "email",
    id: "email",
    autoComplete: "email",
    autoFocus: true,
  },
  {
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    autoFocus: false,
  },
];
export default SignInFormConfig;
