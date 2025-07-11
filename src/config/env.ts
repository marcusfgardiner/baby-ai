import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  VITE_APP_NAME: z.string().default('Baby AI'),
  VITE_API_URL: z.string().url().optional(),
  VITE_LLM_PROVIDER: z.enum(['openai', 'anthropic']).optional(),
  VITE_LLM_MODEL: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  try {
    return envSchema.parse(import.meta.env);
  } catch (error) {
    console.error('❌ Invalid environment variables:', error);
    throw new Error('Invalid environment configuration');
  }
}

export const env = validateEnv();