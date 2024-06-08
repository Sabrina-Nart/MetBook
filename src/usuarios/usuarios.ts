/* eslint-disable prettier/prettier */
import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const usersRouter = Router();

// Rota protegida
usersRouter.get('/protected', (req: Request, res: Response) => {
    // Verifique se o token JWT está presente nos headers da requisição
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        // Verifique e decodifique o token
        const decoded = jwt.verify(token, 'sua_chave_secreta');
        // Aqui você pode consultar o banco de dados para obter os dados do usuário
        // e retorná-los como resposta
        return res.json({ user: decoded });
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
});

export default usersRouter;