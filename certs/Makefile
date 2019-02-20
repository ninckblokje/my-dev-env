clean:
	rm server.key server.crt

localhost:
	openssl genrsa 4096 > server.key
	cat input.txt | openssl req -new -x509 -nodes -sha256 -days 365 -key server.key -out server.crt