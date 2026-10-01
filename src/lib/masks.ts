/**
 * Aplica máscara de telefone brasileiro dinâmica:
 * - Telefone fixo (10 dígitos): (99) 9999-9999
 * - Celular (11 dígitos): (99) 99999-9999
 */
export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits.length ? `(${digits}` : "";
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

/**
 * Validação opcional:
 * - Se estiver vazio, é VÁLIDO (não é obrigatório).
 * - Se tiver conteúdo, deve ter 10 ou 11 dígitos com DDD.
 */
export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return true;
  return digits.length === 10 || digits.length === 11;
}
