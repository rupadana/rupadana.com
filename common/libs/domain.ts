export default function domain(endpoint: string) {
    return `${process.env.DOMAIN}${endpoint}`
}
