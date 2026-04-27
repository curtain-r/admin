#!/usr/bin/env python3
"""
Simple demo server for this repository.

Usage:
    python3 demo.py
    python3 demo.py --host 0.0.0.0 --port 8000
"""

import argparse
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Start a simple Python HTTP static file server."
    )
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind to.")
    parser.add_argument("--port", type=int, default=8000, help="Port to listen on.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    server = ThreadingHTTPServer((args.host, args.port), SimpleHTTPRequestHandler)
    print(
        f"Python demo server is running at http://{args.host}:{args.port} "
        "(Press Ctrl+C to stop)"
    )
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
