package db

import (
	"context"
	"fmt"
	"log"
	"os"
    "time"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Database struct {
	Pool *pgxpool.Pool
}

func Connect() (*Database, error) {
	dbUrl := os.Getenv("DATABASE_URL")
    if dbUrl == "" {
        dbUrl = "postgresql://root@localhost:26257/defaultdb?sslmode=disable"
    }

	config, err := pgxpool.ParseConfig(dbUrl)
	if err != nil {
		return nil, fmt.Errorf("unable to parse database config: %w", err)
	}

    config.MaxConns = 25
    config.MinConns = 5
    config.MaxConnLifetime = time.Hour

	pool, err := pgxpool.NewWithConfig(context.Background(), config)
	if err != nil {
		return nil, fmt.Errorf("unable to create connection pool: %w", err)
	}

    log.Println("Connected to CockroachDB")
	return &Database{Pool: pool}, nil
}

func (db *Database) Close() {
	db.Pool.Close()
}
