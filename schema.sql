-- NexusCloud Database Schema
-- Database: CockroachDB

-- Users & Identity
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email STRING UNIQUE NOT NULL,
    password_hash STRING NOT NULL,
    full_name STRING,
    created_at TIMESTAMP DEFAULT current_timestamp(),
    role STRING DEFAULT 'user' -- 'admin', 'developer', 'viewer'
);

CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID REFERENCES users(id),
    name STRING NOT NULL,
    environment STRING DEFAULT 'production'
);

-- Compute Engine
CREATE TABLE instances (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id),
    name STRING NOT NULL,
    region STRING NOT NULL,
    size_slug STRING NOT NULL, -- e.g., 's-1vcpu-1gb'
    image_slug STRING NOT NULL, -- e.g., 'ubuntu-22-04-x64'
    status STRING NOT NULL, -- 'provisioning', 'active', 'off', 'archive'
    ipv4_address INET,
    created_at TIMESTAMP DEFAULT current_timestamp()
);

-- Networking (IPAM)
CREATE TABLE ip_addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    address INET UNIQUE NOT NULL,
    instance_id UUID REFERENCES instances(id),
    is_reserved BOOL DEFAULT FALSE,
    region STRING NOT NULL
);

-- Billing & Invoicing
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id),
    amount_cents INT NOT NULL,
    status STRING NOT NULL, -- 'pending', 'paid', 'failed'
    billing_period_start TIMESTAMP,
    billing_period_end TIMESTAMP
);
