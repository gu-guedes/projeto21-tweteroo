import { PrismaClient } from '@prisma/client';
import { prisma } from '../../config';
import { ParticipantInput } from '../../protocols';

function create(data:ParticipantInput){
	return prisma.participant.create({data});
}

function findOne(id:number){
	return prisma.participant.findUnique({where:{id}});
}
function update(id:number, increment:number, prispaTransaction:PrismaClient){
	return prispaTransaction.participant.update({
		where: { id },
		data: {
			balance : {
				increment
			}
		}
	});
}
function findMany(){
	return prisma.participant.findMany();
}


export const participantRepository = {
	create,
	findOne,
    update,
    findMany
};