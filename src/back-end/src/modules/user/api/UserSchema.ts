import { FastifyRequest } from "fastify";
import { z } from "zod";

const CreateUserBodySchema = z.object({
  username: z
    .string({ message: "O nome é obrigatorio" })
    .min(3, "O nome é muito curto")
    .max(100, "O nome é muito longo"),
  email: z.string({ message: "O email é obrigatorio" }),
  password: z
    .string({ message: "A senha é obrigatoria" })
    .min(8, "Senha muito curta")
    .max(100, "Senha muito longa"),
  bio: z.string().max(200).optional(),
  linkedin: z
    .string()
    .url({ message: "O likedin deve ser uma url válida", protocol: /^https?$/ })
    .optional(),
  github: z
    .string()
    .url({ message: "O github deve ser uma url válida", protocol: /^https?$/ })
    .optional(),
  website: z
    .string()
    .url({ message: "O website deve ser uma url válida", protocol: /^https?$/ })
    .optional(),
  usertype: z.enum(["DEVELOPER", "EMPLOYER"]),
});

type CreateUserRequest = FastifyRequest<{
  Body: z.infer<typeof CreateUserBodySchema>;
}>;

const LoginUserBodySchema = z.object({
  email: z
    .string({ message: "O email é obrigatório" })
    .email("O email é invalido"),
  password: z.string({ message: "A senha é obrigatória" }),
});

type LoginRequest = FastifyRequest<{
  Body: z.infer<typeof LoginUserBodySchema>;
}>;

const UpdateUserBodySchema = CreateUserBodySchema.omit({
  password: true,
}).partial();

const UpdateUserParamsSchema = z.object({
  id: z.string().uuid("ID do user inválido"),
});

type UpdateUserRequest = FastifyRequest<{
  Params: z.infer<typeof UpdateUserParamsSchema>;
  Body: z.infer<typeof UpdateUserBodySchema>;
}>;

const userRouteSchema = {
  create: {
    body: CreateUserBodySchema,
  },
  update: {
    params: UpdateUserParamsSchema,
    body: UpdateUserBodySchema,
  },
  login: {
    body: LoginUserBodySchema,
  },
};

export { userRouteSchema, CreateUserRequest, UpdateUserRequest, LoginRequest };
