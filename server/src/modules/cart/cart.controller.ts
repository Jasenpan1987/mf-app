import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/users/users.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import products, { Product } from '../../products';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initCart = (indexes: number[]): Cart => {
  return {
    cartItems: indexes.map((idx) => ({
      ...products.find((product) => product.id === idx),
      quantity: 1,
    })),
  };
};

@Controller('cart')
export class CartController {
  private carts = {
    1: initCart([1, 3, 4]),
    2: initCart([2, 5]),
  };
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req: { user: User }): Promise<Cart> {
    const { userId } = req.user;
    return this.carts[userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async addProduct(
    @Request() req: { user: User },
    @Body() { productId }: { productId: number },
  ): Promise<Cart> {
    const { userId } = req.user;
    const cart = this.carts[userId as 1 | 2];

    const cartItem = cart.cartItems.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        ...products.find((p) => p.id === productId),
        quantity: 1,
      });
    }

    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async deleteCart(@Request() req: { user: User }): Promise<Cart> {
    const { userId } = req.user;
    this.carts[userId as 1 | 2] = { cartItems: [] };
    return this.carts[userId as 1 | 2];
  }
}
