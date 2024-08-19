const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME || 'defaultProjectName';

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: `/${projectName}`,
    distDir: projectName,
};

export default nextConfig;
